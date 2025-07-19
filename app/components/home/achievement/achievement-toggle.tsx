"use client";
import { Fragment, useState } from "react";
import { Box, Divider, IconButton, Typography } from "@mui/material";
import { ExpandMore, ExpandLess } from "@mui/icons-material";
import AchievementCard from "./achievement-card";

interface NotionPage {
    id: string;
    title: string;
    date: string;
    isPublic: boolean;
    src?: string;
    content?: string;
}

interface AchievementToggleProps {
    data: NotionPage[];
}

const AchievementToggle = ({ data }: AchievementToggleProps) => {
    const [showAll, setShowAll] = useState(false);
    
    const displayData = showAll ? data : data.slice(0, 3);
    const hasMoreData = data.length > 3;

    return (
        <>
            {displayData.map((item) => (
                <Fragment key={item.src}>
                    <AchievementCard
                        src={item.src || ""}
                        date={item.date.includes('T') ? item.date.split('T')[0] : item.date}
                        title={item.title}
                        content={item.content || ""}
                    />
                    <Divider sx={{ width: "100%" }} color={"#f7f7f7"} />
                </Fragment>
            ))}
            {hasMoreData && (
                <Box 
                    display="flex" 
                    alignItems="center" 
                    justifyContent="center" 
                    mt={3}
                    sx={{ cursor: "pointer" }}
                    onClick={() => setShowAll(!showAll)}
                >
                    <Typography variant="body1" sx={{ mr: 1 }}>
                        {showAll ? "閉じる" : "もっと見る"}
                    </Typography>
                    <IconButton size="small">
                        {showAll ? <ExpandLess /> : <ExpandMore />}
                    </IconButton>
                </Box>
            )}
        </>
    );
};

export default AchievementToggle;