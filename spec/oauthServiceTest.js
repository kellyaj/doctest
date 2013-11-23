describe('oauthService', function() {
  it("should have an array of scopes", function () {
    expect(scopes()[0]).toBe("https://www.googleapis.com/auth/userinfo.email");
  });
});
