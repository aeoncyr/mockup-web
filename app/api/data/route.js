let mockDB = [];


export async function GET() {
    return Response.json(mockDB);
}


export async function POST(req) {
    const body = await req.json();
    const entry = {
        id: mockDB.length + 1,
        name: body.name,
        value: Number(body.value),
        created_at: new Date().toISOString(),
    };
    mockDB.push(entry);


    return Response.json({ message: "Data saved", entry });
}