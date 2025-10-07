
import "./Success.css";
import successImage from "../../assets/success.png";
import { Calendar1Icon , Clock10Icon, User2Icon} from "lucide-react";
import Button from "../UI/Button/Button";

function Success() {
  return (
    <div className="success-container">
      {/* Left Image Section */}
      <div className="success-image-container">
        <img src={successImage} alt="Success" />
      </div>

      {/* Right Content Section */}
      <div className="success-content-container">
        <div className="icon-circle">✔</div>

        <h2>Success!</h2>
        <h3>Your Free Call Has Been Scheduled.</h3>

        <p className="success-subtext">
          Your appointment was successfully created. Please watch your inbox for
          a confirmation email with a link and the details for your call.
        </p>

        <div className="details">
          <div className="detail-item">
            <Calendar1Icon/>
            <span>
              <strong>Date:</strong> 21 September, 2025
            </span>
          </div>
          <div className="detail-item">
            <Clock10Icon/>
            <span>
              <strong>Time:</strong> 2:30 PM MST
            </span>
          </div>
          <div className="detail-item">
            <User2Icon/>
            <span>
              <strong className="success-detail-item">Your Concierge:</strong>{" "}
              John Smith
            </span>
          </div>
        </div>

        <Button backgroundColor={"var(--c2)"}>Back to Home</Button>
      </div>
    </div>
  );
}

export default Success;
