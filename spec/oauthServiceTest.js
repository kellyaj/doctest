describe('oauthService', function() {
  it("should have an array of scopes", function () {
    expect(scopes).toBe("https://www.googleapis.com/auth/plus.me");
  });
});
