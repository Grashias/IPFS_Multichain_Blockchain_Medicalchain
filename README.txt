#
# MultiChain version 1.0 beta 2
#
# Copyright (c) Coin Sciences Ltd - www.multichain.com
#
# Distributed under the GPLv3 software license,
# See: http://www.gnu.org/licenses/gpl-3.0.txt
#

Download and install:
http://www.multichain.com/download-install/

Getting started:
http://www.multichain.com/getting-started/

Developer guide and tutorials:
http://www.multichain.com/developers/

API commands:
http://www.multichain.com/developers/json-rpc-api/

Q&A forum:
http://www.multichain.com/qa/

Source code:
https://github.com/MultiChain/multichain


WINDOWS NOTES
-------------

* For multichaind anti-virus software and/or firewall may need to be disabled.
* The multichaind -daemon flag does not work, so open another cmd prompt.
* The multichain-cli command line tool does not yet support interactive mode.
* The online documentation uses Linux quoting on the command line which will
  not work on DOS. Substitute (e.g.) "{\"asset1\":100}" for '{"asset1":100}'
* The default data directory is %APPDATA%\MultiChain instead of ~/.multichain


CHANGELOG
---------

Version 1.0 beta 2 - 15 June 2017
* Added support for Mac OS X (requires user compilation for now)
* Added liststreamblockitems API to query stream by block or timestamp
* Added listblocks API to retrieve information about multiple blocks
* Added appendrawtransaction API to add inputs and/or outputs to raw txs
* Added support in signmessage to use an external private key
* Added initprivkey runtime parameter to preload private key for new nodes
* Added verification of block miners on forks if support-miner-precheck=true
* More speed optimizations, now over 1000 tx/sec on mid-range hardware
* Many other improvements and minor bug fixes

Version 1.0 beta 1 - 30 March 2017
* Added support for Unicode entity names and stream keys
* Allowed a port to be specified in the externalip runtime parameter
* Reviewing and cleaned up all help messages
* Fixed crashing bug with long stream item keys (introduced in alpha 29)
* Several other smaller bug fixes

Version 1.0 alpha 29 - 20 March 2017
* Reviewed and reorganized all API error codes
* Optimizations to increase transaction and block processing throughput
* Node recovery after hard kill or server shutdown without reindexing
* Reviewed and selectively merged all upstream Bitcoin Core changes
* Added on-chain protocol upgrade mechanism for future-proofing
* Many other smaller fixes and improvements

Version 1.0 alpha 28 - 14 February 2017
* Added enhanced -walletnotify parameter for transaction notifications
* Added getruntimeparams and setruntimeparam APIs for runtime parameters
* Added completerawexchange API to finalize exchange with optional metadata
* Added mine-empty-rounds parameter to limit mining of empty blocks
* Added lock-admin-mine-rounds parameter to lock down governance changes
* Added mining-turnover parameter to control round robin mining concentration
* Reduced minimum target block time to 2 sec (low mining turnover recommended)
* Added lockblock and bantx parameters for fork control, transaction banning
* Increased max metadata and transaction size to 64 MB, 100 MB respectively
* API request output by multichain-cli on stderr (but see -requestout param)
* Many other smaller fixes and improvements

Version 1.0 alpha 27 - 22 December 2016
* Added new protocol version 10007, used by default, with these changes:
- Assets referenced by short txid rather than block number/byte offset
- New format for metadata of asset (re)issuance and stream creation
- Assets can be created or updated without issuing units in an output
- Added support-miner-precheck and anyone-can-receive-empty parameters
- Tightened up some rules following extensive security review
* Changed appendrawchange API behavior to always add an output, even if empty
* Fixed several bugs and misleading error messages

Version 1.0 alpha 26 - 28 November 2016
* Added ability to subscribe to an asset and query all of its transactions
* Added createrawtransaction parameters for sending complex txs in one step
* Added createrawsendfrom API for complex txs with automatic coin selection
* Added createkeypairs and listaddresses APIs for address management
* Allowed publishing stream items in sendwithdata(from), grantwithdata(from)
* Added getstreamitem API to retrieve individual stream items
* Added more output formats for getblock API including full tx decoding
* Added optional byte range parameters in gettxoutdata API
* Allowed plural parameters for many APIs: importaddress, importprivkey,
  (un)subscribe, liststreamkeys, liststreampublishers, listassets, liststreams
* Added support for stream-related transactions in raw transaction decoding
* Allowed blockchain parameters to be set when running multichain-util
* Prevented passwords being stored in multichain-cli history file
* Dozens of other minor fixes and improvements
* Compatibility-breaking API change: address, asset and stream parameters set
  to "" or [] now mean 'none' instead of 'all'. Only use "*" to request 'all'.
  This affects getmultibalances, listassets, listpermissions, liststreams.

Version 1.0 alpha 25 - 27 October 2016
* Added Windows version (released as alpha 24.1 on October 10)
* Renamed APIs for simplicity (old API names are still supported): send(from),
  sendasset(from), sendwithdata(from), grantwithdata(from), appendrawdata
* Fixed several bugs relating to stream publish and subscribe APIs
* Several other small bug fixes for API parameters, responses and errors

Version 1.0 alpha 24 - 15 September 2016
* Added streams for general purpose data storage and retrieval on a
  blockchain, including new APIs, permissions and parameters
* Added count and start parameters to listassets for partial results
* Allowed multiple OP_RETURNs per transaction (max-std-op-returns-count)
* Added maxshowndata parameter to limit size of data in API responses
* Added gettxoutdata API to retrieve full data from a transaction output
* Increased default size of 'orphan pool' to 50000 transactions
* Added "synchronized" field for wallet addresses to show if up-to-date
* Fixed bug with multiple follow-on issuances in the same block
 
Version 1.0 alpha 23 - 8 August 2016
* Fixed intermittent crash when issuing large numbers of assets rapidly
* Fixed bug reading mining-diversity parameter with value of 0

Version 1.0 alpha 22 - 20 July 2016
* Rewrote the in-node wallet to be fully database-driven (not stored in memory)
  for real scalability and sustained performance with millions of transactions
* Added grantwithmetadata and grantwithmetadatafrom APIs
* Added progress report when running with -rescan option
* Allowed target-adjust-freq=-1 to prevent proof-of-work difficulty changes
* Many other smaller bug fixes and improvements

Version 1.0 alpha 21 - 16 May 2016
* Added pause and resume APIs to suspend mining or incoming P2P data
* Added setlastblock API to rewind the chain or switch to a fork
* Added clearmempool API to clear the memory pool of unconfirmed txs
* Added option of passing block height to getblock API
* Fixed database corruption from reorgs on blocks with follow-on issuance
* Improved recovery of corrupted permissions and assets databases

Version 1.0 alpha 20 - 3 May 2016
* Added getmultibalances API for viewing balances for multiple addresses
* Added more decoderawtransaction fields for asset transfer and issuance
* Improved support for multiple nodes on the same IP address (different ports)
* Always returns change to spent addresses, even for non-"from" APIs
* Included cleanup of permissions and assets database when reindex=1
* Fixed support for multiple addresses in one grant/revoke call
* Always apply mining-requires-peers if protocol=bitcoin or anyone-can-mine
* Many other minor bug fixes and improvements

Version 1.0 alpha 19 - 30 March 2016
* Added createrawtransaction support for issuance and permissions metadata
* Added appendrawmetadata support for issuance metadata
* Added details on new assets to be issued in decoderawtransaction 
* Added display message if handshakelocal address not in wallet
* Improved display of API error messages in multichain-cli
* Ignores mining-requires-peers if only one permitted miner
* Fixed appendrawchange bug when spending output of an asset issuance
* Fixed opening wallet with large native asset quantities
* Fixed asset quantity output in listwallettransactions
* Several other minor bug fixes and improvements

Version 1.0 alpha 18 - 13 March 2016
* Fixed broken admin consensus after issuing assets
* Fixed lower case asset names returned by listassets

Version 1.0 alpha 17 - 3 March 2016
* Added follow-on asset issuance, with issuemore and issuemorefrom APIs
* New protocol where mining permissions must be confirmed before use
* Tightened restriction on receiving and using admin permission in same tx
* Fixed rare clash between unconfirmed asset issuances
* Added -shrinkdebugfilesize multichaind parameter to limit debug.log size
* Added -saveclilog multichain-cli parameter to stop storing command history
* Renamed 'issueqty'/'issueraw' to 'qty'/'raw' in 'issue' response elements
* Several other minor bug fixes and improvements

Version 1.0 alpha 16 - 28 January 2016
* Added interactive mode to multichain-cli client
* Added appendrawchange API to complete raw transactions with change
* Added unspendable 'burnaddress' field in response to getinfo API
* Added -datadir parameter to multichain-util to use a custom directory
* Added -shortoutput runtime parameter to multichaind for easier scripting
* Several other minor bug fixes and improvements

Version 1.0 alpha 15 - 7 January 2016
* Moved to libsec256k1 for faster signature creation and verification
* Fixed bug when starting multichaind with reindex=1
* Several other minor bug fixes and improvements

Version 1.0 alpha 14 - 30 December 2015
* Added activate permission which can set connect/send/receive permissions only
* Added optional protocol version parameter to multichain-util
* Added miningrequirespeers parameter to multichaind
* Fixed mining deadlock where mining permission is assigned to an inactive node
* Several other minor bug fixes and improvements

Version 1.0 alpha 13 - 15 December 2015
* Added new APIs for detailed viewing of wallet transactions:
  listwallettransactions, getwallettransaction, listaddresstransactions
  and getaddresstransaction
* Skipped change outputs in listtransactions and gettransaction
* Fixed bug preventing P2SH multisig transactions with metadata
* Renamed 'genesistxid' to 'issuetxid' for asset issues in API responses
* Several other minor bug fixes and improvements

Version 1.0 alpha 12 - 26 November 2015
* Added new APIs for easy sending of transactions with metadata:
  sendwithmetadata and sendwithmetadatafrom
* Added verbose parameter to getaddresses command to give more information
* Included unconfirmed change in getassetbalances/gettotalbalances
* Fixed other assets moving when creating an asset or assigning permissions
* Fixed RPC server bug in chains where anyone-can-connect=true

Version 1.0 alpha 11 - 19 November 2015
* Added verbose parameter to listpermissions command
* Added includeLocked parameter to getaddressbalances/getassetbalances
* Added disablerawtransaction API to disable an offer of exchange
* Added gettotalbalances API to bypass bitcoin-style accounts
* Added txid and vout fields to verbose decoderawexchange output
* Added support for watch-only addresses in getaddressbalances/getassetbalances
* Improved several error messages for clarity
* Fixed several bugs in new coin selection, including for native currency
* Fixed rare crash in listassets and missed transactions after importaddress

Version 1.0 alpha 10 - 12 November 2015
* Added getaddresses API to list all wallet addresses
* Added support for blockchain reindexing with reindex runtime parameter
* New coin selection procedure to maintain separation between assets
* Fixed wallet state bug when spending output from preparelockunspent
* Several other minor bug fixes and improvements

Version 1.0 alpha 9 - 21 October 2015
* Added support for bitcoin-style handshaking where anyone-can-connect=true
* Fixed problems with blockchains where chain-protocol=bitcoin
* Several other minor bug fixes and improvements

Version 1.0 alpha 8 - 14 October 2015
* Added APIs for sending funds and other operations from specific addresses:
  getaddressbalances, sendassetfrom, sendfromaddress, preparelockunspentfrom,
  grantfrom, issuefrom, revokefrom
* Default proof-of-work difficulty reduced to 16 bits
* Set txindex=1 as default to help blockchain querying

Version 1.0 alpha 7 - 8 September 2015
* Added API for appending extra data to transactions: appendrawmetadata
* preparelockunspent JSON-RPC API accepts native asset value
* Sorting listassets JSON-RPC API results
* Fixed some bugs relating to send permission revocation

Version 1.0 alpha 6 - 23 August 2015
* Added APIs for building atomic exchange transactions: preparelockunspent,
  createrawexchange, appendrawexchange, decoderawexchange 
* Extended sendtoaddress to allow sending of multiple assets
* Fixed some bugs relating to datadir and network names

Version 1.0 alpha 5 - 6 August 2015
* combineunspent JSON-RPC API
* Automatic combine transactions
* Faster peer-to-peer connection
* Concurrency bug fixes
* Increased maximal orphan pool size

Version 1.0 alpha 4 - 22 July 2015
* Ignore zero-value outputs from coinbase transactions
* Support for backwards-compatible protocol upgrades
* Earlier creation of multichain.conf
* Added first-block-reward parameter
* Accept multiple addresses in listpermissions

Version 1.0 alpha 3 - 14 July 2015
* Support for Ubuntu 12.04+, CentOS 6.2+, Debian 7+, Fedora 15+, RHEL 6.2+
* Extended output for listpermissions showing changes pending admin consensus

Version 1.0 alpha 2 - 6 July 2015
* Disconnecting nodes without connect permission
* Disconnecting from seed node after initial blockchain synchronization
* Memory pool exchange after initial blockchain synchronization
* Disconnecting block bug fixes for permissions and assets
* Resolved mining deadlocks in rare edge cases
* Case-insensitive asset names

Version 1.0 alpha 1 - 23 June 2015
* First release
