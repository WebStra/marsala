<?php



namespace App\Http\Controllers;



use Illuminate\Http\Request;

use App\Subscriber;

use App\DownloadBook;

use Validator;

use Illuminate\Mail\Message;



class SubscribeController extends Controller

{

    protected $subscribe;



    public function __construct(Subscriber $subscribe)

    {

        $this->subscribe = $subscribe;

    }



    public function subscribe(Request $request) 

    {

        $subscribe = $this->subscribe->firstOrCreate(['email' => $request->get('email')]);

        return redirect()->back();

        if(! $this->checkSubscriber($request->get('email')))

        {

            $subscribe = $this->subscribe->create([

                'email' => $request->get('email'),

                'unsubscribe_token' => str_random(30)

            ]);



            return redirect()->back();

        }

    }



    public function checkSubscriber($email)

    {

        return (bool) $this->subscribe

                ->whereEmail($email)

                ->active()

                ->first();

    }



    public function unsubscribe($token)

    {

        $token->active = (int) false;

        $token->save();

        

        return redirect()->route('home')->withMessage('unsub..');

    }



    public function downloadBookForm(Request $request) {

       

        $rules=array(

          'name' => 'required',

          'email' => 'required|email'  

        );



        $validation=Validator::make($request->all(), $rules);



        if($validation->fails()){

            echo json_encode(array('error'=>'Forma a fost indeplinita cu errori!'));

        }

        else {

            $book = DownloadBook::firstOrCreate([

                'name' => $request->get("name"),

                'email' => $request->get("email")

            ]);



            \Mail::send('partials.EmailBook',

                    ['book' => $book, 'books' => ['book1' => 'path', 'book2' => 'path', 'book3' => 'path']], 

                    function(Message $message) use ($book)

            {
                $message->to($book->email, 

                        sprintf('%s', $book->name));

            });

            echo json_encode(array('success'=>'Fisierele au fost trimise pe email!'));

        }  

    }

}