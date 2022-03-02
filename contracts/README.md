### Selling NFTs you bought

Each NFT has two ids: the `tokenId` and the `itemId`, which are not in lockstep.
`tokenId` is generated when the NFT is created on the `NFT.sol` contract.
`itemId` is generated when the NFT created is put on sale via the `Market.sol` contract.

When you call `createMarketItem()`, it requires the `tokenId`.
When you call `createMarketSale()`, it requires the `itemId` generated in the function above.