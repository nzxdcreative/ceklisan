
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  background: #f2f3f5;
  color: #222;
  font-family: Arial, Helvetica, sans-serif;
}

.app-header {
  background: #20242b;
  color: white;
  padding: 24px 5%;
}

.app-header h1 {
  margin: 0;
  font-size: 24px;
  letter-spacing: 1px;
}

.app-header p {
  margin: 6px 0 0;
  color: #c6cbd2;
  font-size: 13px;
}

.container {
  width: min(1100px, 94%);
  margin: 25px auto;
}

.panel {
  background: white;
  padding: 22px;
  border-radius: 10px;
  margin-bottom: 20px;
  box-shadow: 0 2px 10px rgba(0,0,0,.05);
}

.panel h2 {
  margin: 0 0 18px;
  font-size: 17px;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.form-grid label {
  display: flex;
  flex-direction: column;
  gap: 7px;
  font-size: 13px;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 11px;
  border: 1px solid #cfd3d8;
  border-radius: 5px;
  font-size: 14px;
}

input:focus {
  outline: none;
  border-color: #2474d2;
}

.section-heading {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
}

.section-heading p {
  color: #777;
  font-size: 13px;
}

#progress {
  background: #e8eef8;
  color: #205ca9;
  border-radius: 20px;
  padding: 8px 13px;
  font-size: 13px;
  font-weight: bold;
  white-space: nowrap;
}

.category {
  margin-top: 22px;
  border: 1px solid #c8c8c8;
  border-radius: 5px;
  overflow: hidden;
}

.category-title {
  background: #d3d3d3;
  padding: 11px;
  text-align: center;
  font-size: 13px;
  font-weight: bold;
}

.check-item {
  display: grid;
  grid-template-columns: 1.2fr repeat(3, 1fr);
  border-top: 1px solid #ddd;
  min-height: 48px;
}

.item-name {
  display: flex;
  align-items: center;
  padding: 10px;
  font-size: 13px;
  font-weight: bold;
}

.answer-button {
  border: 0;
  border-left: 1px solid #ddd;
  background: white;
  padding: 9px 5px;
  font-size: 12px;
  cursor: pointer;
  transition: .15s;
}

.answer-button:hover {
  background: #eef3fa;
}

.answer-button.selected {
  background: #2468b4;
  color: white;
  font-weight: bold;
}

.custom-input {
  grid-column: 2 / 5;
  margin: 0 10px 10px;
  width: calc(100% - 20px);
}

.action-panel {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  flex-wrap: wrap;
}

.btn {
  border: none;
  padding: 13px 20px;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
}

.btn-primary {
  background: #2468b4;
  color: white;
}

.btn-primary:hover {
  background: #174d8c;
}

.btn-secondary {
  background: #e0e2e5;
  color: #333;
}

.notification {
  text-align: center;
  font-size: 14px;
  font-weight: bold;
}

.notification.error {
  color: #c62828;
}

.notification.success {
  color: #218838;
}

/* Area laporan JPG */
.report-wrapper {
  position: absolute;
  left: -100000px;
  top: 0;
}

.report {
  width: 1200px;
  padding: 45px;
  background: white;
  color: #111;
  font-family: Arial, sans-serif;
}

.report-header {
  text-align: center;
  border-bottom: 3px solid #222;
  padding-bottom: 18px;
  margin-bottom: 25px;
}

.report-header h1 {
  font-size: 30px;
  margin: 0 0 8px;
}

.report-header p {
  font-size: 15px;
  margin: 0;
}

.report-info {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
  margin-bottom: 25px;
  border: 1px solid #222;
}

.report-info div {
  padding: 12px;
  border-bottom: 1px solid #ddd;
  font-size: 16px;
}

.report-info strong {
  display: inline-block;
  min-width: 165px;
}

.report-category {
  margin-top: 22px;
  border: 1px solid #222;
}

.report-category h2 {
  background: #d0d0d0;
  margin: 0;
  padding: 12px;
  font-size: 17px;
  text-align: center;
  border-bottom: 1px solid #222;
}

.report-table {
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
}

.report-table th,
.report-table td {
  border: 1px solid #333;
  padding: 11px 10px;
  font-size: 14px;
  text-align: center;
  overflow-wrap: anywhere;
}

.report-table th {
  background: #ededed;
}

.report-table td:first-child {
  text-align: left;
  font-weight: bold;
  width: 35%;
}

.report-footer {
  margin-top: 30px;
  padding-top: 15px;
  border-top: 1px solid #aaa;
  text-align: center;
  color: #666;
  font-size: 12px;
}

@media (max-width: 650px) {
  .form-grid {
    grid-template-columns: 1fr;
  }

  .check-item {
    grid-template-columns: 1fr;
    padding-bottom: 8px;
  }

  .item-name {
    background: #f0f0f0;
  }

  .answer-button {
    border: 1px solid #ddd;
    margin: 2px 8px;
    border-radius: 4px;
  }

  .custom-input {
    grid-column: 1;
  }

  .action-panel {
    flex-direction: column;
  }

  .btn {
    width: 100%;
  }
}
