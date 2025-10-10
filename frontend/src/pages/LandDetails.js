import React, { useState } from "react";

const LandDetails = () => {
  const [district, setDistrict] = useState("");
  const [mandal, setMandal] = useState("");
  const [village, setVillage] = useState("");
  const [surveyNumber, setSurveyNumber] = useState("");
  const [landData, setLandData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    setLoading(true);

    // Temporary dummy data — will connect to backend later
    setTimeout(() => {
      setLandData({
        ownerName: "Ravi Kumar",
        extent: 3.25,
        landType: "Agricultural",
        khataNumber: "KH12345",
      });
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-center text-green-700 mb-6">
          Dharani Land Details
        </h1>

        <form
          onSubmit={handleSearch}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
        >
          <div>
            <label className="block mb-2 font-semibold">District</label>
            <input
              type="text"
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              placeholder="Enter District"
              className="w-full border rounded-lg p-2"
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">Mandal</label>
            <input
              type="text"
              value={mandal}
              onChange={(e) => setMandal(e.target.value)}
              placeholder="Enter Mandal"
              className="w-full border rounded-lg p-2"
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">Village</label>
            <input
              type="text"
              value={village}
              onChange={(e) => setVillage(e.target.value)}
              placeholder="Enter Village"
              className="w-full border rounded-lg p-2"
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">Survey Number</label>
            <input
              type="text"
              value={surveyNumber}
              onChange={(e) => setSurveyNumber(e.target.value)}
              placeholder="Enter Survey Number"
              className="w-full border rounded-lg p-2"
              required
            />
          </div>

          <div className="col-span-2 text-center">
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold transition"
            >
              {loading ? "Searching..." : "Search Land Details"}
            </button>
          </div>
        </form>

        {landData && (
          <div className="border-t pt-6">
            <h2 className="text-xl font-bold mb-4 text-blue-700">
              Land Information
            </h2>
            <table className="w-full border-collapse border border-gray-300">
              <tbody>
                <tr>
                  <td className="border p-3 font-semibold bg-gray-100 w-1/3">
                    Owner Name
                  </td>
                  <td className="border p-3">{landData.ownerName}</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold bg-gray-100">
                    Extent
                  </td>
                  <td className="border p-3">{landData.extent} Acres</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold bg-gray-100">
                    Land Type
                  </td>
                  <td className="border p-3">{landData.landType}</td>
                </tr>
                <tr>
                  <td className="border p-3 font-semibold bg-gray-100">
                    Khata Number
                  </td>
                  <td className="border p-3">{landData.khataNumber}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default LandDetails;
