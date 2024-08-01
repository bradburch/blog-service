export default function Home() {
    return (
        <div>
            <form>
                <label>
                    Title: <input name="title" />
                </label>
                <br/><br/>
                <label>
                    Summary: <input name="summary" />
                </label>
                <br/><br/>
                <label>
                    Post: <input name="post" />
                </label>
            </form>

            <button type="submit">Submit</button>
        </div>

    );
  }
  