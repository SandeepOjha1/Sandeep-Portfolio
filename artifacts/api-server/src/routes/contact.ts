import { Router } from "express";
import { db, contactMessagesTable } from "@workspace/db";
import { SubmitContactBody } from "@workspace/api-zod";
import { desc } from "drizzle-orm";

const contactRouter = Router();

contactRouter.post("/contact", async (req, res) => {
  const parsed = SubmitContactBody.safeParse(req.body);

  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }

  const { name, email, message } = parsed.data;

  const [inserted] = await db
    .insert(contactMessagesTable)
    .values({ name, email, message })
    .returning();

  res.status(201).json({
    success: true,
    message: "Your message has been received. I'll get back to you soon!",
    id: inserted.id,
  });
});

contactRouter.get("/contact/messages", async (_req, res) => {
  const messages = await db
    .select()
    .from(contactMessagesTable)
    .orderBy(desc(contactMessagesTable.createdAt));

  res.json(messages);
});

export default contactRouter;
