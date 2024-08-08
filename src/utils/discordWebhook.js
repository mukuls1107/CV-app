import axios from "axios";
const DISCORD_WEBHOOK_URL = import.meta.env.VITE_WEBHOOK_URL;
const sendFeedbackToDiscord = async (feedback) => {
    try {
        await axios.post(DISCORD_WEBHOOK_URL, {
            username: "Feedback",
            embeds: [
                {
                    title: "New Feedback",
                    color: 3447003, 
                    fields: [
                        {
                            name: "Name",
                            value: feedback.username,
                            inline: true,
                        },
                        {
                            name: "Rating",
                            value: feedback.rating,
                            inline: true,
                        },
                        {
                            name: "Comment",
                            value: feedback.comment || "No comment provided",
                            inline: false,
                        },
                        {
                            name: "Feature Wanted",
                            value: feedback.features || "No feature mentioned",
                            inline: false,
                        },
                        {
                            name: "Things You Don't Like",
                            value: feedback.likes || "No dislikes mentioned",
                            inline: false,
                        },
                    ],
                    footer: {
                        text: "Feedback collected via our web app",
                    },
                },
            ],
        });
    } catch (error) {
        console.error("Error sending feedback to Discord:", error);
    }
};

export default sendFeedbackToDiscord;