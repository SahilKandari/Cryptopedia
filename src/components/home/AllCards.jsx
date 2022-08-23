import "./AllCards.css";
import React from "react";
import Card from "../UI/Card";

const AllCards = () => {
  return (
    <div className="row allCards-section">
      <div className="row allCards-singleLine">
        <Card className="col-12 cardBox-single">
          <div className="row ">
            <h3>What Is a Blockchain?</h3>
          </div>
          <div className="row">
            <p>
              A blockchain is a distributed database or ledger that is shared
              among the nodes of a computer network. As a database, a blockchain
              stores information electronically in digital format. Blockchains
              are best known for their crucial role in cryptocurrency systems,
              such as Bitcoin, for maintaining a secure and decentralized record
              of transactions. The innovation with a blockchain is that it
              guarantees the fidelity and security of a record of data and
              generates trust without the need for a trusted third party. One
              key difference between a typical database and a blockchain is how
              the data is structured. A blockchain collects information together
              in groups, known as blocks, that hold sets of information. Blocks
              have certain storage capacities and, when filled, are closed and
              linked to the previously filled block, forming a chain of data
              known as the blockchain. All new information that follows that
              freshly added block is compiled into a newly formed block that
              will then also be added to the chain once filled.
            </p>
          </div>
        </Card>
      </div>
      <div className="row allCards-doubline">
        <Card className="col-md-5 col-sm-12">
          <div className="row">
            <h3>How Does a Blockchain Work?</h3>
          </div>
          <div className="row">
            <p>
              The goal of blockchain is to allow digital information to be
              recorded and distributed, but not edited. In this way, a
              blockchain is the foundation for immutable ledgers, or records of
              transactions that cannot be altered, deleted, or destroyed. This
              is why blockchains are also known as a distributed ledger
              technology (DLT). First proposed as a research project in 1991,
              the blockchain concept predated its first widespread application
              in use: Bitcoin, in 2009. In the years since, the use of
              blockchains has exploded via the creation of various
              cryptocurrencies, decentralized finance (DeFi) applications,
              non-fungible tokens (NFTs), and smart contracts.
            </p>
          </div>
        </Card>
        <Card className="col-md-5 offset-2 col-sm-12 ">
          <div className="row">
            {" "}
            <h3>How Are Blockchains Used?</h3>
          </div>
          <div className="row">
            <p>
              As we now know, blocks on Bitcoin’s blockchain store data about
              monetary transactions. Today, there are more than 10,000 other
              cryptocurrency systems running on blockchain. But it turns out
              that blockchain is actually a reliable way of storing data about
              other types of transactions as well. Some companies that have
              already incorporated blockchain include Walmart, Pfizer, AIG,
              Siemens, Unilever, and a host of others. For example, IBM has
              created its Food Trust blockchain to trace the journey that food
              products take to get to their locations. 3 Why do this? The food
              industry has seen countless outbreaks of E. coli, salmonella, and
              listeria, as well as hazardous materials being accidentally
              introduced to foods. In the past, it has taken weeks to find the
              source of these outbreaks or the cause of sickness from what
              people are eating. Using blockchain gives brands the ability to
              track a food product’s route from its origin, through each stop it
              makes, and finally, its delivery. If a food is found to be
              contaminated, then it can be traced all the way back through each
              stop to its origin. Not only that, but these companies can also
              now see everything else it may have come in contact with, allowing
              the identification of the problem to occur far sooner and
              potentially saving lives. This is one example of blockchain in
              practice, but there are many other forms of blockchain
              implementation.
            </p>
          </div>
        </Card>
      </div>
      <div className="row allCards-doubline">
        <Card className="col-md-5  col-sm-12">
          <div className="row">
            <h3>Blockchain Decentralization</h3>
          </div>
          <div className="row">
            <p>
              Imagine that a company owns a server farm with 10,000 computers
              used to maintain a database holding all of its client’s account
              information. This company owns a warehouse building that contains
              all of these computers under one roof and has full control of each
              of these computers and all of the information contained within
              them. This, however, provides a single point of failure. What
              happens if the electricity at that location goes out? What if its
              Internet connection is severed? What if it burns to the ground?
              What if a bad actor erases everything with a single keystroke? In
              any case, the data is lost or corrupted. What a blockchain does is
              to allow the data held in that database to be spread out among
              several network nodes at various locations. This not only creates
              redundancy but also maintains the fidelity of the data stored
              therein—if somebody tries to alter a record at one instance of the
              database, the other nodes would not be altered and thus would
              prevent a bad actor from doing so. If one user tampers with
              Bitcoin’s record of transactions, all other nodes would
              cross-reference each other and easily pinpoint the node with the
              incorrect information. This system helps to establish an exact and
              transparent order of events. This way, no single node within the
              network can alter information held within it. Because of this, the
              information and history (such as of transactions of a
              cryptocurrency) are irreversible. Such a record could be a list of
              transactions (such as with a cryptocurrency), but it also is
              possible for a blockchain to hold a variety of other information
              like legal contracts, state identifications, or a company’s
              product inventory.
            </p>
          </div>
        </Card>
        <Card className="col-md-5 offset-2  col-sm-12">
          <div className="row">
            {" "}
            <h3>Banking and Finance</h3>
          </div>
          <div className="row">
            <p>
              Perhaps no industry stands to benefit from integrating blockchain
              into its business operations more than banking. Financial
              institutions only operate during business hours, usually five days
              a week. That means if you try to deposit a check on Friday at 6
              p.m., you will likely have to wait until Monday morning to see
              that money hit your account. Even if you do make your deposit
              during business hours, the transaction can still take one to three
              days to verify due to the sheer volume of transactions that banks
              need to settle. Blockchain, on the other hand, never sleeps. By
              integrating blockchain into banks, consumers can see their
              transactions processed in as little as 10 minutes—basically the
              time it takes to add a block to the blockchain, regardless of
              holidays or the time of day or week. With blockchain, banks also
              have the opportunity to exchange funds between institutions more
              quickly and securely. In the stock trading business, for example,
              the settlement and clearing process can take up to three days (or
              longer, if trading internationally), meaning that the money and
              shares are frozen for that period of time. Given the size of the
              sums involved, even the few days that the money is in transit can
              carry significant costs and risks for banks.
            </p>
          </div>
        </Card>
      </div>
      <div className="row allCards-doubline">
        <Card className="col-md-5  col-sm-12">
          <div className="row">
            <h3>Transparency</h3>
          </div>
          <div className="row">
            <p>
              Because of the decentralized nature of Bitcoin’s blockchain, all
              transactions can be transparently viewed by either having a
              personal node or using blockchain explorers that allow anyone to
              see transactions occurring live. Each node has its own copy of the
              chain that gets updated as fresh blocks are confirmed and added.
              This means that if you wanted to, you could track Bitcoin wherever
              it goes. For example, exchanges have been hacked in the past,
              where those who kept Bitcoin on the exchange lost everything.
              While the hacker may be entirely anonymous, the Bitcoins that they
              extracted are easily traceable. If the Bitcoins stolen in some of
              these hacks were to be moved or spent somewhere, it would be
              known. Of course, the records stored in the Bitcoin blockchain (as
              well as most others) are encrypted. This means that only the owner
              of a record can decrypt it to reveal their identity (using a
              public-private key pair). As a result, users of blockchains can
              remain anonymous while preserving transparency.
            </p>
          </div>
        </Card>
        <Card className="col-md-5 offset-2  col-sm-12">
          <div className="row">
            {" "}
            <h3>Currency</h3>
          </div>
          <div className="row">
            <p>
              Blockchain forms the bedrock for cryptocurrencies like Bitcoin.
              The U.S. dollar is controlled by the Federal Reserve. Under this
              central authority system, a user’s data and currency are
              technically at the whim of their bank or government. If a user’s
              bank is hacked, the client’s private information is at risk. If
              the client’s bank collapses or the client lives in a country with
              an unstable government, the value of their currency may be at
              risk. In 2008, several failing banks were bailed out—partially
              using taxpayer money. These are the worries out of which Bitcoin
              was first conceived and developed. By spreading its operations
              across a network of computers, blockchain allows Bitcoin and other
              cryptocurrencies to operate without the need for a central
              authority. This not only reduces risk but also eliminates many of
              the processing and transaction fees. It can also give those in
              countries with unstable currencies or financial infrastructures a
              more stable currency with more applications and a wider network of
              individuals and institutions with whom they can do business, both
              domestically and internationally. Using cryptocurrency wallets for
              savings accounts or as a means of payment is especially profound
              for those who have no state identification. Some countries may be
              war-torn or have governments that lack any real infrastructure to
              provide identification. Citizens of such countries may not have
              access to savings or brokerage accounts—and, therefore, no way to
              safely store wealth. Healthcare Healthcare providers can leverage
              blockchain to securely store their patients’ medical records. When
              a medical record is generated and signed, it can be written into
              the blockchain, which provides patients with the proof and
              confidence that the record cannot be changed. These personal
              health records could be encoded and stored on the blockchain with
              a private key, so that they are only accessible by certain
              individuals, thereby ensuring privacy. Property Records If you
              have ever spent time in your local Recorder’s Office, you will
              know that the process of recording property rights is both
              burdensome and inefficient. Today, a physical deed must be
              delivered to a government employee at the local recording office,
              where it is manually entered into the county’s central database
              and public index. In the case of a property dispute, claims to the
              property must be reconciled with the public index. This process is
              not just costly and time-consuming—it is also prone to human
              error, where each inaccuracy makes tracking property ownership
              less efficient. Blockchain has the potential to eliminate the need
              for scanning documents and tracking down physical files in a local
              recording office. If property ownership is stored and verified on
              the blockchain, owners can trust that their deed is accurate and
              permanently recorded. In war-torn countries or areas that have
              little to no government or financial infrastructure, and certainly
              no Recorder’s Office, it can be nearly impossible to prove
              ownership of a property. If a group of people living in such an
              area is able to leverage blockchain, then transparent and clear
              time lines of property ownership could be established. Smart
              Contracts A smart contract is a computer code that can be built
              into the blockchain to facilitate, verify, or negotiate a contract
              agreement. Smart contracts operate under a set of conditions to
              which users agree. When those conditions are met, the terms of the
              agreement are automatically carried out. Say, for example, that a
              potential tenant would like to lease an apartment using a smart
              contract. The landlord agrees to give the tenant the door code to
              the apartment as soon as the tenant pays the security deposit.
              Both the tenant and the landlord would send their respective
              portions of the deal to the smart contract, which would hold onto
              and automatically exchange the door code for the security deposit
              on the date when the lease begins. If the landlord doesn’t supply
              the door code by the lease date, then the smart contract refunds
              the security deposit. This would eliminate the fees and processes
              typically associated with the use of a notary, a third-party
              mediator, or attorneys. Supply Chains As in the IBM Food Trust
              example, suppliers can use blockchain to record the origins of
              materials that they have purchased. This would allow companies to
              verify the authenticity of not only their products but also common
              labels such as “Organic,” “Local,” and “Fair Trade.” As reported
              by Forbes, the food industry is increasingly adopting the use of
              blockchain to track the path and safety of food throughout the
              farm-to-user journey. 4 Voting As mentioned above, blockchain
              could be used to facilitate a modern voting system. Voting with
              blockchain carries the potential to eliminate election fraud and
              boost voter turnout, as was tested in the November 2018 midterm
              elections in West Virginia. 5 Using blockchain in this way would
              make votes nearly impossible to tamper with. The blockchain
              protocol would also maintain transparency in the electoral
              process, reducing the personnel needed to conduct an election and
              providing officials with nearly instant results. This would
              eliminate the need for recounts or any real concern that fraud
              might threaten the election. Pros and Cons of Blockchain For all
              of its complexity, blockchain’s potential as a decentralized form
              of record-keeping is almost without limit. From greater user
              privacy and heightened security to lower processing fees and fewer
              errors, blockchain technology may very well see applications
              beyond those outlined above. But there are also some
              disadvantages. Pros Improved accuracy by removing human
              involvement in verification Cost reductions by eliminating
              third-party verification Decentralization makes it harder to
              tamper with Transactions are secure, private, and efficient
              Transparent technology Provides a banking alternative and a way to
              secure personal information for citizens of countries with
              unstable or underdeveloped governments Cons Significant technology
              cost associated with mining bitcoin Low transactions per second
              History of use in illicit activities, such as on the dark web
              Regulation varies by jurisdiction and remains uncertain Data
              storage limitations Benefits of Blockchains Accuracy of the Chain
              Transactions on the blockchain network are approved by a network
              of thousands of computers. This removes almost all human
              involvement in the verification process, resulting in less human
              error and an accurate record of information. Even if a computer on
              the network were to make a computational mistake, the error would
              only be made to one copy of the blockchain. For that error to
              spread to the rest of the blockchain, it would need to be made by
              at least 51% of the network’s computers—a near impossibility for a
              large and growing network the size of Bitcoin’s. 6 Cost Reductions
              Typically, consumers pay a bank to verify a transaction, a notary
              to sign a document, or a minister to perform a marriage.
              Blockchain eliminates the need for third-party verification—and,
              with it, their associated costs. For example, business owners
              incur a small fee whenever they accept payments using credit
              cards, because banks and payment-processing companies have to
              process those transactions. Bitcoin, on the other hand, does not
              have a central authority and has limited transaction fees.
              Decentralization Blockchain does not store any of its information
              in a central location. Instead, the blockchain is copied and
              spread across a network of computers. Whenever a new block is
              added to the blockchain, every computer on the network updates its
              blockchain to reflect the change. By spreading that information
              across a network, rather than storing it in one central database,
              blockchain becomes more difficult to tamper with. If a copy of the
              blockchain fell into the hands of a hacker, only a single copy of
              the information, rather than the entire network, would be
              compromised. Efficient Transactions Transactions placed through a
              central authority can take up to a few days to settle. If you
              attempt to deposit a check on Friday evening, for example, you may
              not actually see funds in your account until Monday morning.
              Whereas financial institutions operate during business hours,
              usually five days a week, blockchain is working 24 hours a day,
              seven days a week, and 365 days a year. Transactions can be
              completed in as little as 10 minutes and can be considered secure
              after just a few hours. This is particularly useful for
              cross-border trades, which usually take much longer because of
              time zone issues and the fact that all parties must confirm
              payment processing. Private Transactions Many blockchain networks
              operate as public databases, meaning that anyone with an Internet
              connection can view a list of the network’s transaction history.
              Although users can access details about transactions, they cannot
              access identifying information about the users making those
              transactions. It is a common misperception that blockchain
              networks like bitcoin are anonymous, when in fact they are only
              confidential. When a user makes a public transaction, their unique
              code—called a public key, as mentioned earlier—is recorded on the
              blockchain. Their personal information is not. If a person has
              made a Bitcoin purchase on an exchange that requires
              identification, then the person’s identity is still linked to
              their blockchain address—but a transaction, even when tied to a
              person’s name, does not reveal any personal information. Secure
              Transactions Once a transaction is recorded, its authenticity must
              be verified by the blockchain network. Thousands of computers on
              the blockchain rush to confirm that the details of the purchase
              are correct. After a computer has validated the transaction, it is
              added to the blockchain block. Each block on the blockchain
              contains its own unique hash, along with the unique hash of the
              block before it. When the information on a block is edited in any
              way, that block’s hash code changes—however, the hash code on the
              block after it would not. This discrepancy makes it extremely
              difficult for information on the blockchain to be changed without
              notice. Transparency Most blockchains are entirely open-source
              software. This means that anyone and everyone can view its code.
              This gives auditors the ability to review cryptocurrencies like
              Bitcoin for security. This also means that there is no real
              authority on who controls Bitcoin’s code or how it is edited.
              Because of this, anyone can suggest changes or upgrades to the
              system. If a majority of the network users agree that the new
              version of the code with the upgrade is sound and worthwhile, then
              Bitcoin can be updated. Banking the Unbanked Perhaps the most
              profound facet of blockchain and Bitcoin is the ability for
              anyone, regardless of ethnicity, gender, or cultural background,
              to use it. According to The World Bank, an estimated 1.7 billion
              adults do not have bank accounts or any means of storing their
              money or wealth. 7 Nearly all of these individuals live in
              developing countries, where the economy is in its infancy and
              entirely dependent on cash. These people often earn a little money
              that is paid in physical cash. They then need to store this
              physical cash in hidden locations in their homes or other places
              of living, leaving them subject to robbery or unnecessary
              violence. Keys to a bitcoin wallet can be stored on a piece of
              paper, a cheap cell phone, or even memorized if necessary. For
              most people, it is likely that these options are more easily
              hidden than a small pile of cash under a mattress. Blockchains of
              the future are also looking for solutions to not only be a unit of
              account for wealth storage but also to store medical records,
              property rights, and a variety of other legal contracts. Drawbacks
              of Blockchains Technology Cost Although blockchain can save users
              money on transaction fees, the technology is far from free. For
              example, the PoW system which the bitcoin network uses to validate
              transactions, consumes vast amounts of computational power. In the
              real world, the power from the millions of computers on the
              bitcoin network is close to what Norway and Ukraine consume
              annually. 8 Despite the costs of mining bitcoin, users continue to
              drive up their electricity bills to validate transactions on the
              blockchain. That’s because when miners add a block to the bitcoin
              blockchain, they are rewarded with enough bitcoin to make their
              time and energy worthwhile. When it comes to blockchains that do
              not use cryptocurrency, however, miners will need to be paid or
              otherwise incentivized to validate transactions. Some solutions to
              these issues are beginning to arise. For example, bitcoin-mining
              farms have been set up to use solar power, excess natural gas from
              fracking sites, or power from wind farms. Speed and Data
              Inefficiency Bitcoin is a perfect case study for the possible
              inefficiencies of blockchain. Bitcoin’s PoW system takes about 10
              minutes to add a new block to the blockchain. 9 At that rate, it’s
              estimated that the blockchain network can only manage about seven
              transactions per second (TPS). Although other cryptocurrencies
              such as Ethereum perform better than bitcoin, they are still
              limited by blockchain. Legacy brand Visa, for context, can process
              65,000 TPS. 10 Solutions to this issue have been in development
              for years. There are currently blockchains that are boasting more
              than 30,000 TPS. 11 The other issue is that each block can only
              hold so much data. The block size debate has been, and continues
              to be, one of the most pressing issues for the scalability of
              blockchains going forward. Illegal Activity While confidentiality
              on the blockchain network protects users from hacks and preserves
              privacy, it also allows for illegal trading and activity on the
              blockchain network. The most cited example of blockchain being
              used for illicit transactions is probably the Silk Road, an online
              dark web illegal-drug and money laundering marketplace operating
              from February 2011 until October 2013, when it was shut down by
              the FBI. 12 The dark web allows users to buy and sell illegal
              goods without being tracked by using the Tor Browser and make
              illegal purchases in Bitcoin or other cryptocurrencies. Current
              U.S. regulations require financial service providers to obtain
              information about their customers when they open an account,
              verify the identity of each customer, and confirm that customers
              do not appear on any list of known or suspected terrorist
              organizations. 13 This system can be seen as both a pro and a con.
              It gives anyone access to financial accounts but also allows
              criminals to more easily transact. Many have argued that the good
              uses of crypto, like banking the unbanked world, outweigh the bad
              uses of cryptocurrency, especially when most illegal activity is
              still accomplished through untraceable cash. While Bitcoin had
              been used early on for such purposes, its transparent nature and
              maturity as a financial asset has actually seen illegal activity
              migrate to other cryptocurrencies such as Monero and Dash. 14
              Today, illegal activity accounts for only a very small fraction of
              all Bitcoin transactions. 15 Regulation Many in the crypto space
              have expressed concerns about government regulation over
              cryptocurrencies. While it is getting increasingly difficult and
              near impossible to end something like Bitcoin as its decentralized
              network grows, governments could theoretically make it illegal to
              own cryptocurrencies or participate in their networks. This
              concern has grown smaller over time, as large companies like
              PayPal begin to allow the ownership and use of cryptocurrencies on
              its platform. What Is a Blockchain in Simple Terms? Simply put, a
              blockchain is a shared database or ledger. Pieces of data are
              stored in data structures known as blocks, and each node of the
              network has an exact replica of the entire database. Security is
              ensured since if somebody tries to edit or delete an entry in one
              copy of the ledger, the majority will not reflect this change and
              it will be rejected. How Many Blockchains Are There? The number of
              live blockchains is growing every day at an ever-increasing pace.
              As of 2022, there are more than 10,000 active cryptocurrencies
              based on blockchain, with several hundred more non-cryptocurrency
              blockchains. 16 What’s the Difference Between a Private Blockchain
              and a Public Blockchain? A public blockchain, also known as an
              open or permissionless blockchain, is one where anybody can join
              the network freely and establish a node. Because of their open
              nature, these blockchains must be secured with cryptography and a
              consensus system like proof of work (PoW). A private or
              permissioned blockchain, on the other hand, requires each node to
              be approved before joining. Because nodes are considered to be
              trusted, the layers of security do not need to be as robust. What
              Is a Blockchain Platform? A blockchain platform allows users and
              developers to create novel uses on top of an existing blockchain
              infrastructure. One example is Ethereum, which has a native
              cryptocurrency known as ether (ETH). 17 But the Ethereum
              blockchain also allows the creation of smart contracts and
              programmable tokens used in initial coin offerings (ICOs), and
              non-fungible tokens (NFTs). These are all built up around the
              Ethereum infrastructure and secured by nodes on the Ethereum
              network. Who Invented Blockchain? Blockchain technology was first
              outlined in 1991 by Stuart Haber and W. Scott Stornetta, two
              mathematicians who wanted to implement a system where document
              timestamps could not be tampered with. 1 In the late 1990s,
              Cypherpunk Nick Szabo proposed using a blockchain to secure a
              digital payments system, known as bit gold (which was never
              implemented). 18 The Bottom Line With many practical applications
              for the technology already being implemented and explored,
              blockchain is finally making a name for itself in no small part
              because of bitcoin and cryptocurrency. As a buzzword on the tongue
              of every investor in the nation, blockchain stands to make
              business and government operations more accurate, efficient,
              secure, and cheap, with fewer middlemen. As we prepare to head
              into the third decade of blockchain, it’s no longer a question of
              if legacy companies will catch on to the technology—it’s a
              question of when. Today, we see a proliferation of NFTs and the
              tokenization of assets. The next decades will prove to be an
              important period of growth for blockchain. ARTICLE SOURCES
            </p>
          </div>
        </Card>
      </div>
      <div className="row allCards-doubline ">
        <Card className="col-md-5  col-sm-12">
          <div className="row">
            <h3>Is Blockchain Secure?</h3>
          </div>
          <div className="row">
            <p>
              Blockchain technology achieves decentralized security and trust in
              several ways. To begin with, new blocks are always stored linearly
              and chronologically. That is, they are always added to the “end”
              of the blockchain. After a block has been added to the end of the
              blockchain, it is extremely difficult to go back and alter the
              contents of the block unless a majority of the network has reached
              a consensus to do so. That’s because each block contains its own
              hash, along with the hash of the block before it, as well as the
              previously mentioned timestamp. Hash codes are created by a
              mathematical function that turns digital information into a string
              of numbers and letters. If that information is edited in any way,
              then the hash code changes as well. Let’s say that a hacker, who
              also runs a node on a blockchain network, wants to alter a
              blockchain and steal cryptocurrency from everyone else. If they
              were to alter their own single copy, it would no longer align with
              everyone else’s copy. When everyone else cross-references their
              copies against each other, they would see this one copy stand out,
              and that hacker’s version of the chain would be cast away as
              illegitimate. Succeeding with such a hack would require that the
              hacker simultaneously control and alter 51% or more of the copies
              of the blockchain so that their new copy becomes the majority copy
              and, thus, the agreed-upon chain. Such an attack would also
              require an immense amount of money and resources, as they would
              need to redo all of the blocks because they would now have
              different timestamps and hash codes. Due to the size of many
              cryptocurrency networks and how fast they are growing, the cost to
              pull off such a feat probably would be insurmountable. This would
              be not only extremely expensive but also likely fruitless. Doing
              such a thing would not go unnoticed, as network members would see
              such drastic alterations to the blockchain. The network members
              would then hard fork off to a new version of the chain that has
              not been affected. This would cause the attacked version of the
              token to plummet in value, making the attack ultimately pointless,
              as the bad actor has control of a worthless asset. The same would
              occur if the bad actor were to attack the new fork of Bitcoin. It
              is built this way so that taking part in the network is far more
              economically incentivized than attacking it.
            </p>
          </div>
        </Card>
        <Card className="col-md-5 offset-2  col-sm-12">
          <div className="row">
            {" "}
            <h3>Bitcoin vs. Blockchain</h3>
          </div>
          <div className="row">
            <p>
              Blockchain technology was first outlined in 1991 by Stuart Haber
              and W. Scott Stornetta, two researchers who wanted to implement a
              system where document timestamps could not be tampered with. But
              it wasn’t until almost two decades later, with the launch of
              Bitcoin in January 2009, that blockchain had its first real-world
              application. 1 The Bitcoin protocol is built on a blockchain. In a
              research paper introducing the digital currency, Bitcoin’s
              pseudonymous creator, Satoshi Nakamoto, referred to it as “a new
              electronic cash system that’s fully peer-to-peer, with no trusted
              third party.” 2 The key thing to understand here is that Bitcoin
              merely uses blockchain as a means to transparently record a ledger
              of payments, but blockchain can, in theory, be used to immutably
              record any number of data points. As discussed above, this could
              be in the form of transactions, votes in an election, product
              inventories, state identifications, deeds to homes, and much more.
              Currently, tens of thousands of projects are looking to implement
              blockchains in a variety of ways to help society other than just
              recording transactions—for example, as a way to vote securely in
              democratic elections. The nature of blockchain’s immutability
              means that fraudulent voting would become far more difficult to
              occur. For example, a voting system could work such that each
              citizen of a country would be issued a single cryptocurrency or
              token. Each candidate would then be given a specific wallet
              address, and the voters would send their token or crypto to the
              address of whichever candidate for whom they wish to vote. The
              transparent and traceable nature of blockchain would eliminate
              both the need for human vote counting and the ability of bad
              actors to tamper with physical ballots.
            </p>
          </div>
        </Card>
      </div>
      <div className="row allCards-singleLine">
        <Card className="col-12">
          <div className="row ">
            <h3>Blockchain vs. Banks</h3>
          </div>
          <div className="row">
            <p>
              Blockchains have been heralded as being a disruptive force to the
              finance sector, and especially with the functions of payments and
              banking. However, banks and decentralized blockchains are vastly
              different. To see how a bank differs from blockchain, let’s
              compare the banking system to Bitcoin’s implementation of
              blockchain.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};
export default AllCards;
