import axios from "axios";

export async function getData() {
  try {
    const response = await axios.get(
      "https://opentdb.com/api.php?amount=20&difficulty=medium&type=multiple"
    );
    return response.data.results;
  } catch (err) {
    console.log(err);
  }
}
