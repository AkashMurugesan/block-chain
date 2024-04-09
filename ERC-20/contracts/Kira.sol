// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Kira is ERC20 {
    constructor() ERC20("Kira", "KI") {
        _mint(msg.sender, 350000000 * 10 ** decimals());
    }
}