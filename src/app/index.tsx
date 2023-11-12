import { Routing } from '@/pages';
import { withProviders } from "./providers";

const App = () => {
  return (
    <div className="min-h-screen">
      <Routing />
    </div>
  );
};

export default withProviders(App);