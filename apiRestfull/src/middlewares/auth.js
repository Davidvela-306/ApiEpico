import jwt from "jsonwebtoken";

const createToken = (userInfo) => {
  // Genera un token firmado con la información del usuario y una clave secreta, el token expira en 1 hora
  return jwt.sign(userInfo, "secret_key", { expiresIn: "1h" });
};

// Middleware para verificar el token JWT en las solicitudes
const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Token no proporcionado." });
  }

  const token = authHeader.split(" ")[1]; 
  // Verifica el token usando la clave secreta:
  jwt.verify(token, "secret_key", (err, decoded) => {
    if (err) {
        //token inválido o expirado
      return res.status(403).json({ message: "Fallo al autenticar el token." });
    }

    // Si el token es válido, almacena la información decodificada del token en req.user
    req.user = decoded;
    next();
  });
};

export { createToken, verifyToken };
