export function notFoundMiddleware(req: any, res: any) {
  return res.status(404).send("route was not found");
}
