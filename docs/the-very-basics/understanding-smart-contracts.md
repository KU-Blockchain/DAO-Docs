---
sidebar_label: Understanding Smart Contracts
---

# Understanding Smart Contracts

There is currently an open bounty for DAO members to write this page. You can [find the DAO task here](https://dao.kublockchain.com/tasks/?task=0x2c-0xf4efc952759fa6b4bc5aafe8150f373feb9df208&projectId=Getting%20Started-0xf4efc952759fa6b4bc5aafe8150f373feb9df208).

### **What Are Smart Contracts?**

A **smart contract** is a self-executing piece of code stored on a blockchain that enforces the terms of an agreement between two or more parties. Smart contracts can be thought of as a digital version of a traditional contract but instead of requiring lawyers or banks to oversee and enforce the agreement, the blockchain ensures everything happens automatically once the predefined conditions are met.

The main characteristics of Smart Contracts are that it is:

1. **Self-executing**: Once the conditions are met, the code runs automatically.
2. **Immutable**: Once deployed on the blockchain, the code cannot be changed.
3. **Transparent**: Everyone on the blockchain can view the code (on the majority of blockchains like Ethereum, Solana, BSC, Avalanche, Polygon, Cardano, etc.)
4. **Trustless**: The parties don’t need to trust each other because the blockchain ensures fair execution of the contract.

---

### **How Do Smart Contracts Work?**

Smart contracts run on blockchains, which are decentralized, distributed ledgers. Here's how they work step-by-step:

1. **Writing the Contract**: Developers write the smart contract's code using programming languages like Solidity (for Ethereum), Vyper, or Rust (for other blockchains like Solana). The code holds the predetermined outcomes that will be activated when certain conditions are met.  
   Example: If Party A sends $100 to Party B by a specific date then the blockchain automatically transfers a product or service to Party A.
2. **Deploying on the Blockchain**: Once the code is written, the code is deployed (added) to a blockchain network. This makes the smart contract accessible to anyone and ensures it is immutable and transparent.
3. **Triggering the Contract**: The smart contract activates when certain conditions are met. These conditions could be many things such as the payment of funds, a date being reached, or a specific event occurring.
4. **Execution**: When the conditions are met, the contract executes automatically without the need for human/manual intervention.
5. **Record Keeping**: All actions performed by the contract are recorded on the blockchain to ensure transparency and auditability.

---

### **Key Components of a Smart Contract**

Now that you now what a smart contract is, let’s break down the key components of a smart contract:

1. **Conditions:** These are the instructions built into the smart contract using if-then statements  
   **Example**: If Micah sends 2 Ether, then Alice will transfer her concert ticket to Micah.  
   The contract won’t do anything unless the condition is met which makes it a reliable and automatic process.
2. **Decentralized Ledger:** The smart contract lives on a blockchain such as Ethereum. The blockchain acts as a public record book that keeps track of everything the smart contract does.
3. **Execution Environment:**  
   Smart contracts need a specific secure environment to run on.  
   **Example**: On Ethereum, this special environment is called the Ethereum Virtual Machine (EVM). It ensures that the contract does exactly what it was coded to do and that no one can alter the process.
4. **Gas Fees:**  
   Running a smart contract takes a small fee that you pay called gas.  
   **Example**: When Micah sends 2 Ether to buy Alice’s ticket, he pays a bit extra (the gas fee) to make sure the contract runs smoothly.

The full steps for Micah and Alice to trade a concert ticket using a smart contract in this scenario would be:

1. Micah sends 2 Ether to the contract.
2. The contract checks: "Did Micah send the exact amount?"  
   If Yes? The contract transfers the ticket to Micah.  
   If No? Nothing happens, and the funds stay with Micah.
3. The blockchain records the transaction so everyone knows the trade happened.

Solidity Example of Smart Contract Code:

```
pragma solidity ^0.8.0;

contract TicketSale {
    address public seller; // Alice's address (seller of the ticket)
    address public buyer;  // Micah's address (once the ticket is purchased)
    uint public ticketPrice; // Price of the ticket in Wei
    bool public ticketSold; // Status of the ticket

    constructor(uint _ticketPrice) {
        seller = msg.sender; // The person deploying the contract (Alice)
        ticketPrice = _ticketPrice; // Set the price of the ticket
        ticketSold = false; // Initially, the ticket is not sold
    }

    // Function to buy the ticket
    function buyTicket() external payable {
        require(!ticketSold, "Ticket already sold"); // Ensure the ticket is not sold yet
        require(msg.value == ticketPrice, "Incorrect ticket price"); // Ensure the sent Ether matches the ticket price

        buyer = msg.sender; // Record the buyer's address (Micah)
        ticketSold = true; // Mark the ticket as sold

        payable(seller).transfer(msg.value); // Transfer the Ether to the seller (Alice)
    }

    // Function to check ownership
    function getTicketOwner() external view returns (address) {
        if (ticketSold) {
            return buyer; // Return Micah's address if the ticket is sold
        } else {
            return seller; // Return Alice's address if the ticket is not sold
        }
    }
}
```

---

### **Advantages of Smart Contracts**

Smart contracts have several advantages compared to traditional agreements:

1. **Automation**: Smart contracts eliminate manual intervention to make processes faster and more efficient.
2. **Cost-Effective**: Smart contracts reduce the need for intermediaries such as banks, lawyers, or notaries.
3. **Transparency**: All parties can see the contract’s terms to ensure clarity and to reduce disputes.
4. **Security**: Blockchain’s cryptographic mechanisms make smart contracts tamper-proof.
5. **Global Accessibility**: Smart contracts can be accessed and executed anywhere in the world which enables cross-border agreements.

---

### **Limitations of Smart Contracts**

While there are many advantages to smart contracts they have some limitations too:

1. **Code Errors**: Bugs in the contract’s code can lead to vulnerabilities and exploitation (e.g., the 2016 DAO hack on Ethereum).
2. **Oracles**: Smart contracts often rely on external data (e.g., weather reports, stock prices). They need oracles to fetch this data, but oracles can be a point of failure in reliability of data if the oracle is exploited.
3. **Scalability**: On-chain execution can be slow and expensive especially when the network is congested.
4. **Legal Ambiguity**: The legal status of smart contracts is still unclear in many jurisdictions.

---

### **Real-World Examples of Smart Contracts**

Smart Contracts are already being applied to many sectors and hold immense potential for transforming industries in the future. Advancements in this technology will have great implications for various industries. These are some ways smart contracts can be used to revolutionize industries.

1. **Finance**: Decentralized Finance (DeFi) platforms like Aave and Uniswap use smart contracts to enable lending, borrowing, and trading without banks.
2. **Supply Chain**: The contracts can be used to track goods as they move through a supply chain. For example, when a shipment reaches a destination, the payment is automatically released.
3. **Real Estate**: Smart contracts can automate property transfers. Once a buyer pays the agreed amount, the smart contract transfers the deed to their name.
4. **Gaming**: Smart contracts can govern in-game asset ownership and trades while ensuring fairness and security.
5. **Healthcare**: Smart contracts can be used to hold patient records securely and allow controlled access based on predefined conditions.
