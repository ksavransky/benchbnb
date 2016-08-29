class Api::BenchesController < ApplicationController

  def index
    # benches = bounds ? Bench.in_bounds(bounds) : Bench.all
    #
    # render :index
    # render json: Bench.in_bounds(params[:bounds])
    render json: Bench.all


  end


  def create
    @bench = Bench.create!(bench_params)
    render :show
  end


  def show
    @bench = Bench.find(params[:id])
    render json: @bench
  end



  def bench_params
    params.require(:bench).permit(
      :lat,
      :lng,
      :description,
      :seating,
      :picture_url
    )
  end

  def bounds
    params[:bounds]
  end

end
