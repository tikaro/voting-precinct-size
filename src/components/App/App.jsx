import { Headline } from '../Headline/Headline';
import { Chart } from '../Chart/Chart';
import { PrecinctTable } from '../PrecinctTable/PrecinctTable';

function App() {
  return (
    <div className="App">
      <Headline />
      <Chart />
      <PrecinctTable />
      <p>The count of registered voters is from Paul Dewey's spreadsheet that he shared with me (thanks, Paul!) It is not official. TODO: update the numbers with something canonical.</p>
    </div>
  );
}

export default App;
