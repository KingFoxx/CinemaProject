import { render } from "@testing-library/react";
import "bootstrap/dist/css/bootstrap.min.css";

const Discussion=()=> {

    const handleSubmit = event => {
        event.preventDefault();
    }

    return(
        <div>
            <h3>Discussion Thread!</h3>
            <form onSubmit={handleSubmit}>
                <div class="container form-group">
                    <fieldset>
                        <div class="row form-control-sm">
                            <input class="col" type="text" name="name" placeholder="Your name" maxLength={40}/>
                            <div class="col"/>
                            <input class="col" type="text" name="movie" placeholder="Movie name" maxLength={40}/>
                        </div>
                        <div class="row form-control-sm">
                            <input class="col" type="text" name="title" placeholder="Post title" maxLength={40}/>
                            <div class="col"/>
                            <div class="col container">
                              <div class="row">
                                <input disabled="true" class="col" value="Rating"/>
                                <select  class="col">
                                  <option>5 Star</option>
                                  <option>4 Star</option>
                                  <option>3 Star</option>
                                  <option>2 Star</option>
                                  <option>1 Star</option>
                                </select>
                              </div>
                            </div>
                        </div>
                        <div class="row form-control-sm">
                            <textarea type="text" name="body" placeholder="Discuss here..." maxLength={500}/>
                        </div>
                    
                    </fieldset>
                </div>
                <div class="text-center">
                    <button class="mt-3" type="submit">Submit</button>
                </div>
                
            </form>
        </div>
    );
}

export default Discussion;