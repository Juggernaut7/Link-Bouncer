// src/utils/scanLink.js
import axios from "axios";

const API_KEY = import.meta.env.VITE_GOOGLE_SAFE_BROWSING_KEY;

export const scanLink = async (urlToScan) => {
  const apiUrl = `https://safebrowsing.googleapis.com/v4/threatMatches:find?key=${API_KEY}`;

  const requestBody = {
    client: {
      clientId: "linkbouncer-app",
      clientVersion: "1.0.0",
    },
    threatInfo: {
      threatTypes: [
        "MALWARE",
        "SOCIAL_ENGINEERING",
        "UNWANTED_SOFTWARE",
        "POTENTIALLY_HARMFUL_APPLICATION",
      ],
      platformTypes: ["ANY_PLATFORM"],
      threatEntryTypes: ["URL"],
      threatEntries: [{ url: urlToScan }],
    },
  };

  try {
    const response = await axios.post(apiUrl, requestBody);
    const hasThreat = response.data?.matches?.length > 0;

    if (hasThreat) {
      const threat = response.data.matches[0];
      return {
        status: "dangerous",
        message: `Threat detected: ${threat.threatType}`,
      };
    }

    return {
      status: "safe",
      message: "No threats found. URL is safe.",
    };
  } catch (error) {
    console.error("Error scanning link:", error.message);
    return {
      status: "suspicious",
      message: "Could not verify link. Please try again.",
    };
  }
};
