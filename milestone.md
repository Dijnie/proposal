Hydra C – A Lightweight SDK for Interacting with Hydra Heads																													
	Name	Hour	People	Total (ADA)	Cost/Milestone	%/Milestone																							
	Reliable WebSocket Connection & Hydra Protocol Message Handling																												
MS1: 1st Month	HydraWS module: robust WebSocket client with automatic reconnection, exponential backoff, and built-in heartbeat (ping/pong)	55	1	3300	16500	17,24%	60																						
	HydraJSON module: full encode/decode + strict schema validation for all Hydra protocol messages (Greeting, PeerConnected, HeadIsInitializing, Commit, NewTx, SnapshotConfirmed, RolledBack, HeadIsClosed, etc.)	45	1	2700																									
	Unified logging system and error code enumeration	35	1	2100																									
	Unit test suite (CMocka) with ≥90% coverage on message validation	40	2	4800																									
	Standalone demo	30	1	1800																									
	Project management (organizing, and controlling resources, tasks)	30	1	1800																									
																													
	High-Level HydraClient API & Event Callback System																												
MS2: 2nd, 3rd month	HydraProvider opaque struct with complete public function: new, connect, init, commit, new_tx, close, contest, fanout, abort	80	2	9600	22800	23,82%																							
	Full event callback system (function pointers) for all protocol events (HeadIsOpen, SnapshotConfirmed, TxValid, HeadIsClosed, RolledBack, etc.)	80	1	4800																									
	Automatic retry logic for transient network/server errors	50	1	3000																									
	Console application demonstrating complete Head lifecycle on testnet	60	1	3600																									
	Project management (organizing, and controlling resources, tasks)	30	1	1800																									
																													
	Robust State Machine & Out-of-Order / Rollback Message Handling																												
MS3: 4th, 5th month	Full Hydra state machine (Idle → Initializing → Open → Closing → Closed → Finalized)	80	2	9600	21600	22,57%																							
	Event processing pipeline that correctly handles delayed, reordered, duplicated, and rollback messages	60	1	3600																									
	Comprehensive integration test suite simulating 50+ real-world network scenarios	50	1	3000																									
	State transition diagram and documentation	60	1	3600																									
	Project management (organizing, and controlling resources, tasks)	30	1	1800																									
																													
	Layer-2 Transaction Builder & UTxO Management																												
MS4: 6th, 7th month	HydraTxBuilder: construct valid Layer-2 transactions (inputs, outputs, metadata, fees) → CBOR hex output	75	2	9000	20700	21,63%																							
	UTxO query API: fetch_utxos(), fetch_utxos_at_address(), get_head_utxos()	45	1	2700																									
	Automatic transaction submission with retry on InvalidTx / ReqSnInvalid	40	1	2400																									
	Signing abstraction layer (stub implementation, ready for future wallet integration)	35	1	2100																									
	Three end-to-end demo scripts: commit → multi-tx payment → successful fanout	50	1	3000																									
	Project management (organizing, and controlling resources, tasks)	25	1	1500																									
																													
	Cross-Platform Packaging, Documentation & v1.0.0 Release																												
MS5: 8th month	Cross-platform shared/static libraries: Linux (.so), macOS (.dylib), Windows (.dll + .lib)	25	1	1500	14100	14,73%																							
	Clean public headers in include/hydra	22	1	1320																									
	examples folder with 4 complete, ready-to-run sample applications	35	1	2100																									
	Comprehensive documentation: Quick Start, full API reference, Unreal Engine guide, troubleshooting	45	1	2700																									
	GitHub Release v1.0.0 with prebuilt binaries for all platforms	28	1	1680																									
	Complete build & usage walkthrough video	35	1	2100																									
	Create a Project Close-Out Report and Project Close-Out Video.	20	1	1200																									
	Project management (organizing, and controlling resources, tasks)	25	1	1500																									
																													
																													
																													
																													
	Total (ADA)			95.700																									
																													
