import { Routing } from '@/pages';
import { withProviders } from "./providers";

const App = withProviders(() => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-100 via-teal-300 to-teal-500">
      <Routing />
    </div>
  );
});

export default App;