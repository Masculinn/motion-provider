import { Provider } from "react-redux";
import { ProviderStoreProps } from "../interfaces";
import { store } from "../store";

export default function StoreProvider({ children }: ProviderStoreProps) {
  return <Provider store={store}>{children}</Provider>;
}
