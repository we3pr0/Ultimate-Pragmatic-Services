import LoadingSpinner from './LoadingSpinner';

interface LoadingStateProps {
  text?: string;
  fullPage?: boolean;
}

const LoadingState = ({ text = 'Loading...', fullPage = false }: LoadingStateProps) => {
  const containerClasses = fullPage
    ? 'min-h-[80vh] flex items-center justify-center'
    : 'py-12 flex flex-col items-center justify-center';

  return (
    <div className={containerClasses}>
      <div className="text-center">
        <LoadingSpinner size="lg" />
        <p className="mt-4 text-secondary-600 text-lg">{text}</p>
      </div>
    </div>
  );
};

export default LoadingState;