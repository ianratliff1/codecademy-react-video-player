function Video(props) {
    const { src } = props;
    return (
      <div>
        <video src={src} controls autostart autoPlay muted/>
      </div>
    );
};
export default Video;