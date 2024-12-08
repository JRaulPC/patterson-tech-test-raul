import styles from "@/app/components/Pagination/pagination.module.css";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const goPrev = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const goNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <nav className={styles.navigationContainer}>
      <p>
        Page <strong>{currentPage}</strong> / <strong>{totalPages}</strong>
      </p>
      <div className={styles.navigationContainerButtons}>
        <button onClick={goPrev} disabled={currentPage === 1}>
          Prev
        </button>
        <button onClick={goNext} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </nav>
  );
}
