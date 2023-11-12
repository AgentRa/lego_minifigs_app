import compose from "compose-function";
import { withRouter } from "./with-router";
import { withStore } from '@/app/providers/with-store.tsx';

export const withProviders = compose(withStore, withRouter);