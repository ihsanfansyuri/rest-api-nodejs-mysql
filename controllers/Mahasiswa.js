import db from "../config/connection.js";
import response from "./Response.js";

export const getAllMhs = (req, res) => {
  const sql = "SELECT * FROM mahasiswa";

  db.query(sql, (err, result) => {
    if (err) {
      response(404, err, "Failed to get all data", res);
    } else {
      response(200, result, "Get all data from mahasiswa", res);
    }
  });
};

export const getMhs = (req, res) => {
  const id = req.params.id;
  const sql = `SELECT * FROM mahasiswa WHERE id=${id}`;

  db.query(sql, (err, result) => {
    if (err) {
      response(404, err, `Id ${id} not found!`, res);
    } else {
      response(200, result, `Id ${id} found!`, res);
    }
  });
};

export const addMhs = (req, res) => {
  const data = { ...req.body };
  const sql = "INSERT INTO mahasiswa SET ?";

  db.query(sql, data, (err, result) => {
    if (err) {
      response(500, err, "Failed to insert data!", res);
    } else {
      response(201, result, "Success to insert data!", res);
    }
  });
};

export const updateMhs = (req, res) => {
  const { id } = req.params;
  const data = { ...req.body };
  const sql = `UPDATE mahasiswa SET ? WHERE id = ${id}`;

  db.query(sql, data, (err, result) => {
    if (err) {
      response(500, err, "Failed to update data!", res);
    } else {
      response(201, result, "Success to update data!", res);
    }
  });
};

export const deleteMhs = (req, res) => {
  const { id } = req.params;
  const sql = `DELETE FROM mahasiswa WHERE id = ${id} `;

  db.query(sql, (err, result) => {
    if (err) {
      response(500, err, "Failed to delete data!", res);
    } else {
      response(201, result, "Success to delete data!", res);
    }
  });
};
