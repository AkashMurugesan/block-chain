// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Mikey is ERC721, Ownable {
    constructor() ERC721("Mikey", "MK") {}

    function _baseURI() internal pure override returns (string memory) {
        return
            "http://localhost:1984/1-OIuh_vmVj-yBD6JTSJ65I-gOnNRl6pWWpzqTbC-x0";
    }

    function safeMint(address to, uint256 tokenId) public onlyOwner {
        _safeMint(to, tokenId);
    }
}
