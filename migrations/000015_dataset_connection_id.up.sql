ALTER TABLE datasets ADD COLUMN connection_id uuid;
ALTER TABLE datasets ADD CONSTRAINT fk_source FOREIGN KEY(connection_id) REFERENCES connections;
