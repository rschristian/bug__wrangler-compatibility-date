export async function onRequestGet() {
    return new Response(JSON.stringify({ hello: 'world' }), { status: 200 });
}
