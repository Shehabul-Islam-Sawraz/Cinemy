import React from 'react';
import VideoPlayer from 'react-native-video-controls';

const Video = ({onClose}) => {
    return (
        <VideoPlayer
            source = {
                {uri: 'https://vjs.zencdn.net/v/oceans.mp4'}
            }
            // We will hide the video player when back button is pressed
            onBack = {() => {
                onClose();
            }}
            onEnd = {() => {
                onClose();
            }}
            // This matches the orientation of the device with the video player
            fullscreenOrientation = "all"
        />
    );
};

export default Video;