const server = Bun.serve({
  fetch(req) {
    const url = new URL(req.url);
    const filePath = url.pathname === "/" ? "/hi.html" : url.pathname;
    return new Response(Bun.file("." + filePath));
  },
});

console.log(`Listening on http://localhost:3000`);