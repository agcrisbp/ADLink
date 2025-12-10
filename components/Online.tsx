import axios from "axios";
import { useMemo } from "react";
import useSWR from "swr";
import { motion } from "framer-motion";

const Online = ({ section }) => {
  const { data, isLoading } = useSWR(`/api/online`, (url) =>
    axios.get(url).then((res) => res.data)
  );

  console.log(data);
  const [status] = useMemo((): [string] => {
    if (!data) return ["Loading"];
  
    switch (data?.data?.discord_status) {
      case "online":
        return ["🟢 Online"];
      case "idle":
        return ["🟡 Idle"];
      case "dnd":
        return ["🔴 Do Not Disturb"];
      case "offline":
        return ["🟤 Offline"];
      case "streaming":
        return ["🟣 Streaming"];
      default:
        return ["Unknown"];
    }
  }, [data]);

  return (
    <motion.div
      animate={{
        opacity: 0.7,
      }}
    >
          <p>{status}</p>
    </motion.div>
  );
};

export default Online;
