import "dotenv/config";
import http from "node:http";
import { sendContactEmail } from "./contact-mailer.js";

const PORT = process.env.PORT ?? 3001;

const REQUIRED_FIELDS = ["prenom", "nom", "email", "fonction", "secteur", "motif", "message"];

function json(res, status, body) {
  const payload = JSON.stringify(body);
  res.writeHead(status, {
    "Content-Type": "application/json",
    "Content-Length": Buffer.byteLength(payload),
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
  });
  res.end(payload);
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let raw = "";
    req.on("data", (chunk) => { raw += chunk; });
    req.on("end", () => {
      try {
        resolve(JSON.parse(raw));
      } catch {
        reject(new Error("Corps de requête invalide (JSON attendu)"));
      }
    });
    req.on("error", reject);
  });
}

const server = http.createServer(async (req, res) => {
  // Preflight CORS
  if (req.method === "OPTIONS") {
    res.writeHead(204, {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
    });
    return res.end();
  }

  if (req.method === "POST" && req.url === "/api/contact") {
    let data;
    try {
      data = await readBody(req);
    } catch {
      return json(res, 400, { error: "Corps de requête invalide." });
    }

    // Validation serveur
    const missing = REQUIRED_FIELDS.filter((f) => !data[f] || String(data[f]).trim() === "");
    if (missing.length > 0) {
      return json(res, 422, { error: `Champs manquants : ${missing.join(", ")}` });
    }

    // Validation basique de l'email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      return json(res, 422, { error: "Adresse e-mail invalide." });
    }

    try {
      await sendContactEmail(data);
      return json(res, 200, { success: true });
    } catch (err) {
      console.error("[contact] Erreur envoi email :", err.message);
      return json(res, 500, { error: "L'envoi du message a échoué. Veuillez réessayer ultérieurement." });
    }
  }

  json(res, 404, { error: "Endpoint introuvable." });
});

server.listen(PORT, () => {
  console.log(`[server] Prêt sur http://localhost:${PORT}`);
});
