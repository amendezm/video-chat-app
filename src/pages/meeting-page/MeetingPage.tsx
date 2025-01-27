import { useEffect, useMemo } from "react";

import { useParticipants } from "../../hooks";
import { MeetingButtons, Participant } from "../../components";
import { useTwilioContext } from "../../context";

import { MeetingTopActions } from "./components";

const MeetingPage = () => {
  const { participants } = useParticipants();
  const size = useMemo(() => participants.length, [participants]);
  const { isVideoEnabled, hasMultipleVideoInputs, setVideoInputDevices } =
    useTwilioContext();

  useEffect(() => {
    setVideoInputDevices();
  }, []);

  return (
    <div className="meeting-page">
      {isVideoEnabled && hasMultipleVideoInputs && <MeetingTopActions />}
      <div className={`grid grid--${size}`}>
        {participants.map((participant, index) => (
          <Participant
            key={participant.sid ?? index}
            participant={participant}
            index={index}
          />
        ))}
      </div>
      <MeetingButtons />
    </div>
  );
};

export { MeetingPage };
