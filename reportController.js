import * as reportDAL from './DAL/reportsDal.js';

// Create a new report
export const createReport = async (req, res) => {
    try {
        const reportData = { ...req.body };
        if (reportData.timestamp) {
            reportData.timestamp = new Date(reportData.timestamp);
        }
        const report = await reportDAL.createReport(reportData);
        res.status(201).json(report);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get all reports
export const getReports = async (req, res) => {
    try {
        const reports = await reportDAL.getReports();
        res.status(200).json(reports);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get high severity reports
export const getHighReports = async (req, res) => {
    try {
        const reports = await reportDAL.getHighReports();
        res.status(200).json(reports);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Confirm a report by ID
export const confirmReport = async (req, res) => {
    try {
        const report = await reportDAL.confirmReport(req.params.id);
        if (!report) {
            return res.status(404).json({ error: 'Report not found' });
        }
        res.status(200).json(report);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Delete a report by ID
export const deleteReport = async (req, res) => {
    try {
        const result = await reportDAL.deleteReport(req.params.id);
        if (!result) {
            return res.status(404).json({ error: 'Report not found' });
        }
        res.status(200).json({ message: 'Report deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};