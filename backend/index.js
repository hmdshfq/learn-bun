Bun.serve({
    // To configure which port and hostname the server will listen on:
    port: 4545,
    hostname: 'localhost',
    // The fetch handler handles incoming requests. It receives a Request object and returns a Response or Promise<Response>.
    fetch(req) {
        const url = new URL(req.url);
        switch (url.pathname) {
            case '/':
                return new Response('Homepage');
                break;
            case '/blog':
                return new Response('Blog');
                break;
            default:
                return new Response('404');
                break;
        }
    },
});
