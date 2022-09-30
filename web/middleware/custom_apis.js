export default function scriptTagApi(app) {
  app.get("/api/test-api", async (req, res) => {
    res.json({
      status: "success",
      message: "Successfully API working",
    });
  });
}
