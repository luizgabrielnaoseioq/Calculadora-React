import { CalculatorProvider } from "./context/CalculatorContext";
import { Calculator } from "./components/Calculator/Calculator";
// import { OperationHistory } from "./components/History/OperationHistory";

export default function App() {
  return (
    <div
      className="bg-linear-[180deg,_#807ECE_0%,_#807ECE_100%]
      min-h-screen text-(--text)
      font-(--font-sans)"
    >
      <main
        className="py-15 px-4 sm:px-10
          flex flex-col sm:flex-row
          items-center sm:items-stretch
          gap-2"
      >
        <CalculatorProvider>
          <Calculator />
          {/* <OperationHistory /> */}
        </CalculatorProvider>
      </main>
    </div>
  );
}
