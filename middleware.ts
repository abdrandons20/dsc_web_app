import { auth } from "./auth";

export default auth(() => {
  // req.auth
});

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
  unstable_allowDynamic: [
    "./node_modules/@babel/runtime/regenerator/index.js",
    "./node_modules/next-auth/core/errors.js",
    "./node_modules/next-auth/utils/logger.js",
    "./node_modules/next-auth/core/index.js",
    "./node_modules/next-auth/next/index.js",
    "./node_modules/next-auth/index.js",
    "./auth.ts",
    "./middleware.ts",
  ],
};
