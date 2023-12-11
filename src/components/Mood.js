
import { useNavigate } from 'react-router-dom';
import { Dropdown, ButtonGroup } from 'react-bootstrap';

export function MoodPage() {
  const navigate = useNavigate();

  const handleMoodChange = (selectedMood) => {
    navigate(`/${selectedMood}`);
  };

  return (
    <div className="selector-container">
        <div className="modal-container">
          <h1 className="select-title">SELECT YOUR MOOD</h1>
          <p className="select-notice">SELECT YOUR MOOD AND LISTEN TO A PLAYLIST CURATED FOR YOUR MOOD.</p>
          <Dropdown as={ButtonGroup} onSelect={handleMoodChange} className="mx-auto">
            <Dropdown.Toggle variant="primary" className="dropdown-basic">
              SELECT
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item eventKey="party">Party Drake</Dropdown.Item>
              <Dropdown.Item eventKey="nostalgic">Nostalgic Drake</Dropdown.Item>
              <Dropdown.Item eventKey="heartbreak">Heartbreak Drake</Dropdown.Item>
              <Dropdown.Item eventKey="club">Hit the Club Drake</Dropdown.Item>
              <Dropdown.Item eventKey="hyped">Hyped Drake</Dropdown.Item>
              <Dropdown.Item eventKey="combination">Combination Drake</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
    </div>
  );
}