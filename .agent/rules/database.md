# Database Standards

## 1. General Rules
- **Naming Conventions**:
  - Use `snake_case` for table and column names to ensure compatibility across different SQL dialects.
  - Avoid reserved words (e.g., `user`, `order`). Use explicit names `app_user`, `customer_order`.
- **Normalization**:
  - Aim for 3NF (Third Normal Form) for transactional databases (OLTP).
  - Denormalize responsibly only for read-heavy analytical workloads (OLAP).

## 2. Relational (SQL)
- **Indexing**:
  - Always index Foreign Keys.
  - Index columns used frequently in `WHERE`, `ORDER BY`, and `JOIN` clauses.
  - Avoid over-indexing; every index slows down writes.
- **Migrations**:
  - **Mandatory**: Use tools like Liquibase or Flyway.
  - Never modify schemas manually in production. Every change must be a versioned script.

## 3. NoSQL
- **Document Modeling**:
  - Design based on access patterns, not just data structure.
  - Embed data when read together; reference (normalized) when data grows indefinitely or is accessed independently.
- **Redis Usage**:
  - Use explicit TTLs (Time To Live) for caching keys to prevent memory leaks.
  - Namespace keys with colons (e.g., `user:123:session`).
