import { LazyComponent } from "../../components/LazyComponent";
import "./styles.css";

const config: IntersectionObserverInit = {
  root: null,
  rootMargin: "0px",
  threshold: 0.9,
};

export default function IntersectionObserverVirtualList() {
  return (
    <div className="VirtualList">
      {Array.from({ length: 100 }, (_, i) => (
        <LazyComponent key={i} config={config}>
          <div style={{ padding: 10 }}>
            <div style={{ backgroundColor: "orange" }}>
              {`Item ${i + 1}`}
              {Array.from({ length: Math.random() * 10 }, (_, j) => (
                <div key={j} style={{ height: 20 }}>
                  Content
                </div>
              ))}
            </div>
          </div>
        </LazyComponent>
      ))}
    </div>
  );
}
