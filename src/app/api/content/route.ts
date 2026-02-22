import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const DATA_PATH = path.join(process.cwd(), "src/data/site-content.json");

export async function GET() {
    try {
        const fileContents = fs.readFileSync(DATA_PATH, "utf8");
        return NextResponse.json(JSON.parse(fileContents));
    } catch (error) {
        return NextResponse.json({ error: "Failed to read data" }, { status: 500 });
    }
}

export async function POST(req: NextRequest) {
    try {
        const newData = await req.json();
        fs.writeFileSync(DATA_PATH, JSON.stringify(newData, null, 2), "utf8");
        return NextResponse.json({ message: "Data saved successfully" });
    } catch (error) {
        return NextResponse.json({ error: "Failed to save data" }, { status: 500 });
    }
}
