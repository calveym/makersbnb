
describe ("Listing", function() {
var listing;

beforeEach(function () {
  listing = new Listing ();
});
  it ('has the title of the listing', function() {
    expect(listing.listingName).toEqual('');
  });

  it ('has a description for the listing', function () {
    expect(listing.listingDesc).toBe('');
  });

  it ('has the price of the listing', function() {
    expect(listing.price).toEqual(0);
  });

  it ('has an image of the listing', function () {
    expect(listing.image).toBe('');
  });
});
