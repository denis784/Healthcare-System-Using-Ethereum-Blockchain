// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract UserRegistry {
    // Struct to store user details
    struct User {
        string username;
        address userAddress;
    }

    // Mapping to store users
    mapping(address => User) public users;

    // Event emitted when a new user is registered
    event UserRegistered(string username, address userAddress);

    // Function to register a new user
    function registerUser(string memory _username) public {
        // Check if the user is not already registered
        require(users[msg.sender].userAddress == address(0), "User already registered");

        // Create a new user
        User memory newUser = User({
            username: _username,
            userAddress: msg.sender
        });

        // Add the user to the mapping
        users[msg.sender] = newUser;

        // Emit the UserRegistered event
        emit UserRegistered(_username, msg.sender);
    }
}
