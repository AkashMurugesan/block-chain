// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Mikey is ERC1155 {
    uint256 public constant GUNS = 1;
    uint256 public constant SKINS = 2;

    constructor(string memory tokenURI) ERC1155(tokenURI) {
        _mint(_msgSender(), GUNS, 10, "");
        _mint(_msgSender(), SKINS, 10, "");
    }
}
